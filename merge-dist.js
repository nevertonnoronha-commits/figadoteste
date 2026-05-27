import { spawnSync } from 'child_process';
import { mkdirSync, rmSync } from 'fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

const result = spawnSync('robocopy', ['pasta3\\dist', 'dist', '/E', '/NFL', '/NDL', '/NJH', '/NJS'], { stdio: 'inherit', shell: true });
if (result.status > 8) {
  process.exit(result.status);
}
console.log('dist/ ready from pasta3/dist');
