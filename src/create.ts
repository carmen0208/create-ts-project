import path from 'path';
import fs from 'fs-extra';

export async function createProject(projectName: string): Promise<void> {
  const templateDir = path.join(__dirname, '../template');
  const targetDir = path.join(process.cwd(), projectName);

  try {
    // 复制模板文件
    await fs.copy(templateDir, targetDir);

    // 更新项目的 package.json
    const pkgPath = path.join(targetDir, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = projectName;
    pkg.version = '0.1.0';
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    console.log(`
Project ${projectName} created successfully!

To get started:
  cd ${projectName}
  npm install
  npm run start
    `);
  } catch (error) {
    console.error('Error creating project:', error);
    process.exit(1);
  }
} 