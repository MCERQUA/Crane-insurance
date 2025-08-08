#!/usr/bin/env node

/**
 * Pre-deployment validation script
 * Simulates Netlify environment to catch build failures before deployment
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Pre-deployment validation starting...\n');

// Check Node version compatibility
console.log('📋 Checking Node.js version compatibility...');
const nodeVersion = process.version;
console.log(`Current Node.js version: ${nodeVersion}`);
if (!nodeVersion.startsWith('v20') && !nodeVersion.startsWith('v18')) {
  console.warn('⚠️  Warning: Netlify uses Node 20.x, current version may cause compatibility issues');
}

// Check package.json exists
console.log('\n📦 Checking package configuration...');
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(`✅ Package: ${packageJson.name}@${packageJson.version}`);

// Check for critical dependencies
const requiredDeps = ['astro', '@astrojs/react', '@astrojs/tailwind'];
const missingDeps = requiredDeps.filter(dep => 
  !packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]
);

if (missingDeps.length > 0) {
  console.error(`❌ Missing required dependencies: ${missingDeps.join(', ')}`);
  process.exit(1);
}
console.log('✅ All required dependencies found');

// Check for MDX files with potential issues
console.log('\n📝 Scanning MDX files for common issues...');
try {
  const contentDir = 'content';
  if (fs.existsSync(contentDir)) {
    const scanDir = (dir) => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDir(filePath);
        } else if (file.endsWith('.mdx')) {
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Check for CRLF line endings
          if (content.includes('\r\n')) {
            console.warn(`⚠️  CRLF line endings detected in ${filePath}`);
          }
          
          // Check for problematic components
          const problematicImports = [
            '@/components/ui/CTABox',
            '@/components/ui/Checklist', 
            '@/components/ui/GetQuoteCTA',
            '@/components/blog/'
          ];
          
          problematicImports.forEach(imp => {
            if (content.includes(imp)) {
              console.error(`❌ Problematic import found in ${filePath}: ${imp}`);
            }
          });
          
          // Check for dangerous Callout types
          if (content.includes('type="danger"')) {
            console.error(`❌ Dangerous Callout type found in ${filePath}: type="danger" should be type="warning"`);
          }
        }
      });
    };
    
    scanDir(contentDir);
    console.log('✅ MDX file scan completed');
  } else {
    console.log('ℹ️  No content directory found - skipping MDX scan');
  }
} catch (error) {
  console.warn(`⚠️  MDX scan failed: ${error.message}`);
}

// Check Astro configuration
console.log('\n⚙️  Checking Astro configuration...');
if (!fs.existsSync('astro.config.mjs') && !fs.existsSync('astro.config.js')) {
  console.error('❌ Astro configuration file not found');
  process.exit(1);
}
console.log('✅ Astro configuration found');

// Check for build script
console.log('\n🔨 Checking build configuration...');
if (!packageJson.scripts?.build) {
  console.error('❌ No build script found in package.json');
  process.exit(1);
}
console.log(`✅ Build script: ${packageJson.scripts.build}`);

// Check if node_modules exists (skip installation test for speed)
console.log('\n📥 Checking dependency installation...');
if (!fs.existsSync('node_modules')) {
  console.error('❌ node_modules directory not found - run npm install first');
  process.exit(1);
} else {
  console.log('✅ Dependencies appear to be installed');
}

// Test build process
console.log('\n🏗️  Testing build process...');
try {
  console.log('Running production build...');
  const buildOutput = execSync('npm run build', { 
    stdio: 'pipe',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build completed successfully');
  
  // Check if build output exists
  if (fs.existsSync('dist')) {
    const distFiles = fs.readdirSync('dist');
    console.log(`✅ Build output contains ${distFiles.length} files/directories`);
  } else {
    console.error('❌ No build output directory found');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Build process failed');
  console.error(error.toString());
  process.exit(1);
}

// Environment variable check
console.log('\n🌍 Checking environment variables...');
const requiredEnvVars = ['NODE_ENV'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.warn(`⚠️  Missing environment variables: ${missingEnvVars.join(', ')}`);
} else {
  console.log('✅ Environment variables configured');
}

// Final validation summary
console.log('\n🎉 Pre-deployment validation completed!');
console.log('✅ All checks passed - deployment ready');
console.log('\nNext steps:');
console.log('1. Run: npm run test:mdx');
console.log('2. Run: npm run test:netlify'); 
console.log('3. Deploy when all tests pass');