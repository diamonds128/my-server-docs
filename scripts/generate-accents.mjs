import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// 复用 starlight-theme-md3 的配色生成（内部已用 material-color-utilities）
const { generateSeedColorScheme } = await import(
	pathToFileURL(join(__dirname, '..', 'node_modules', 'starlight-theme-md3', 'dist', 'palette.js')).href
);

const schemes = [
	{ id: 'purple', seed: '#6750A4', label: '紫' },
	{ id: 'blue', seed: '#005CBB', label: '蓝' },
	{ id: 'green', seed: '#006E26', label: '绿' },
	{ id: 'orange', seed: '#B13E00', label: '橙' },
	{ id: 'pink', seed: '#B3266B', label: '粉' },
	{ id: 'teal', seed: '#006A6A', label: '蓝绿' },
	{ id: 'red', seed: '#BA1A1A', label: '红' },
	{ id: 'yellow', seed: '#8E7000', label: '黄' },
];

let css = '/* Auto-generated — 由 scripts/generate-accents.mjs 生成，勿手改 */\n';
for (const s of schemes) {
	const { light, dark } = generateSeedColorScheme(s.seed, 'tonalSpot');
	css += `\n:root[data-accent='${s.id}'],\n:root[data-accent='${s.id}'] ::backdrop {\n`;
	for (const [k, v] of Object.entries(dark)) css += `\t--md-sys-color-${k}: ${v};\n`;
	css += `}\n`;
	css += `:root[data-accent='${s.id}'][data-theme='light'] {\n`;
	for (const [k, v] of Object.entries(light)) css += `\t--md-sys-color-${k}: ${v};\n`;
	css += `}\n`;
}

const out = join(__dirname, '..', 'src', 'styles', 'accents.css');
writeFileSync(out, css);
console.log('已生成:', out, '(', schemes.length, '套配色,', css.length, 'bytes )');
