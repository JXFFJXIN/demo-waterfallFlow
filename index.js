var offset = 20;
var maxCount = 50;
var start = 0;
var end = start + offset;
var oWonderfulList = document.getElementsByClassName('wonderful-list')[0];
var oGetMore = document.getElementsByClassName('get-more')[0];


function render () {
  var template = '';
  for(var i = start; i < end; i ++) {
    var info = dataArr[i];
    template += `
      <li class="wonderful-item">
        <a class="card-item" href="${info.href}">
          <div class="item-pic">
            <img src="${info.img_src}" alt="">
          </div>
          <div class="item-info">
            <div class="item-desc" title="${info.desc}">${info.desc}</div>
            <div class="item-price">¥${info.price}</div>
          </div>
        </a>
      </li>
    `;
  }

  oWonderfulList.innerHTML += template;
};

oGetMore.onclick = function () {
  if(end === maxCount) { return };
  
  start += offset;
  end += offset;

  if(end > maxCount) {
    end = maxCount;
    oGetMore.innerText = '没有更多了';
  }
  render();
}


render();