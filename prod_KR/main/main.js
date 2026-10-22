const parts = location.pathname.split('/');
const slot = parts[parts.lastIndexOf('main') - 1];
const names = { dev: 'dev', qa: 'QA', prod_KR: '한국', prod_JP: '일본' };

if (names[slot]) {
  document.getElementById('title').textContent = names[slot] + ' 메인 화면';
}
