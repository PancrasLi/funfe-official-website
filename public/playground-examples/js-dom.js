// DOM 操作示例

// 1. 创建元素
const div = document.createElement('div');
div.id = 'myDiv';
div.className = 'demo-class';
div.innerHTML = '这是动态创建的 div';
document.body.appendChild(div);

// 2. 修改样式
div.style.color = 'red';
div.style.backgroundColor = '#f0f0f0';
div.style.padding = '10px';
div.style.marginBottom = '10px';

// 3. 创建并添加按钮
const button = document.createElement('button');
button.textContent = '点击我';
button.onclick = function() {
    alert('按钮被点击了！');
};
document.body.appendChild(button);

// 4. 创建文本输入框
const input = document.createElement('input');
input.type = 'text';
input.placeholder = '请输入内容';
input.style.marginLeft = '10px';
document.body.appendChild(input);

// 5. 监听输入事件
input.addEventListener('input', function(e) {
    div.textContent = '你输入的内容是: ' + e.target.value;
});

// 注意：这些 DOM 操作在 playground 环境中可能无法直接看到效果
// 因为没有实际的 DOM 环境，但代码逻辑是正确的
console.log('DOM 操作示例代码已加载，但在此环境中仅供参考');
console.log('请在实际的网页环境中尝试这些操作'); 