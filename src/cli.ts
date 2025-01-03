#!/usr/bin/env node
import { program } from 'commander';
import { createProject } from './create';

program
  .name('create-ts-project')
  .description('Create a new TypeScript project with ESLint and Jest')
  .argument('<project-name>', 'Name of the project')
  .action(createProject);

program.parse(); 