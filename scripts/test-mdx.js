#!/usr/bin/env node

/**
 * MDX file validation script
 * Checks for common parsing errors that cause Netlify build failures
 */

import fs from 'fs';
import path from 'path';

console.log('📝 MDX Validation Starting...\n');

let errorCount = 0;
let fileCount = 0;
let checkedFiles = [];

// Define problematic patterns
const problematicImports = [
  '@/components/ui/CTABox',
  '@/components/ui/Checklist', 
  '@/components/ui/GetQuoteCTA',
  '@/components/blog/BlogFAQ',
  '@/components/blog/BlogCTA',
  '@/components/blog/BlogQuoteBox',
  '@/components/blog/BlogInfographic'
];

const unsafeCalloutTypes = ['danger', 'error'];

// Check if content directory exists
const contentDirs = ['content', 'src/content', 'src/pages'];
let contentDir = null;

for (const dir of contentDirs) {
  if (fs.existsSync(dir)) {
    contentDir = dir;
    break;
  }
}

if (!contentDir) {
  console.log('ℹ️  No content directory found - checking for MDX files in src/');
  contentDir = 'src';
}

console.log(`📁 Scanning directory: ${contentDir}`);

// Recursive file scanner
function scanDirectory(dir) {
  try {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and hidden directories
        if (!item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        }
      } else if (item.endsWith('.mdx')) {
        validateMDXFile(fullPath);
      }
    });
  } catch (error) {
    console.warn(`⚠️  Cannot scan directory ${dir}: ${error.message}`);
  }
}

// MDX file validation
function validateMDXFile(filePath) {
  fileCount++;
  checkedFiles.push(filePath);
  console.log(`🔍 Checking: ${filePath}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fileErrors = 0;
    
    // Check for CRLF line endings (Windows compatibility issue)
    if (content.includes('\r\n')) {
      console.error(`  ❌ CRLF line endings detected (use LF only)`);
      fileErrors++;
    }
    
    // Check for problematic component imports
    problematicImports.forEach(importPath => {
      if (content.includes(importPath)) {
        console.error(`  ❌ Problematic import: ${importPath}`);
        fileErrors++;
      }
    });
    
    // Check for unsafe Callout types
    unsafeCalloutTypes.forEach(type => {
      if (content.includes(`type="${type}"`)) {
        console.error(`  ❌ Unsafe Callout type: ${type} (use "warning" instead)`);
        fileErrors++;
      }
    });
    
    // Check for basic frontmatter
    if (!content.startsWith('---\n')) {
      console.error(`  ❌ Missing or malformed frontmatter`);
      fileErrors++;
    }
    
    // Check for balanced JSX tags (basic check)
    const openTags = (content.match(/<[^\/][^>]*>/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    const selfClosing = (content.match(/<[^>]*\/>/g) || []).length;
    
    // Simple balance check (not perfect but catches obvious issues)
    if (openTags - selfClosing !== closeTags) {
      console.warn(`  ⚠️  Possible JSX tag imbalance (${openTags} open, ${closeTags} close, ${selfClosing} self-closing)`);
    }
    
    // Check for valid frontmatter structure
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      
      // Check for required fields
      const requiredFields = ['title', 'description'];
      requiredFields.forEach(field => {
        if (!frontmatter.includes(`${field}:`)) {
          console.warn(`  ⚠️  Missing recommended frontmatter field: ${field}`);
        }
      });
    }
    
    if (fileErrors === 0) {
      console.log(`  ✅ Valid`);
    } else {
      errorCount += fileErrors;
    }
    
  } catch (error) {
    console.error(`  ❌ Error reading file: ${error.message}`);
    errorCount++;
  }
}

// Run validation
scanDirectory(contentDir);

// Results summary
console.log('\n📊 Validation Results:');
console.log(`Files checked: ${fileCount}`);
console.log(`Errors found: ${errorCount}`);

if (checkedFiles.length > 0) {
  console.log('\n📋 Files checked:');
  checkedFiles.forEach(file => console.log(`  - ${file}`));
}

if (errorCount === 0) {
  console.log('\n🎉 All MDX files passed validation!');
  console.log('✅ Ready for deployment');
  process.exit(0);
} else {
  console.log('\n❌ MDX validation failed');
  console.log(`Fix ${errorCount} error(s) before deployment`);
  console.log('\nCommon fixes:');
  console.log('- Convert CRLF to LF: find . -name "*.mdx" -exec dos2unix {} \\;');
  console.log('- Replace problematic components with safe alternatives');
  console.log('- Use type="warning" instead of type="danger" in Callout components');
  process.exit(1);
}