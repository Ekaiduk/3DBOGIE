function loadModel(containerId, imagePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = containerId;
    img.style.cssText = 'width:100%; height:100%; object-fit:contain; display:block;';

    // ซ่อน loading overlay ถ้ามี
    const overlay = container.querySelector('.loading-overlay');
    if (overlay) overlay.style.display = 'none';

    // ซ่อน controls hint ถ้ามี
    const hint = container.querySelector('.controls-hint');
    if (hint) hint.style.display = 'none';

    container.appendChild(img);
}

loadModel("model1",  "./images/photomodel1.png");
loadModel("model2",  "./images/photomodel2.png");
loadModel("model3",  "./images/photomodel3.png");
loadModel("model4",  "./images/photomodel4.png");
loadModel("model5",  "./images/photomodel5.png");
loadModel("model6",  "./images/photomodel6.png");
loadModel("model7",  "./images/photomodel7.png");
loadModel("model8",  "./images/photomodel8.png");
loadModel("model9",  "./images/photomodel9.png");
loadModel("model10", "./images/photomodel10.png");
loadModel("model11", "./images/photomodel11.png");
loadModel("model12", "./images/photomodel12.png");
loadModel("model13", "./images/photomodel13.png");
loadModel("model14", "./images/photomodel14.png");
loadModel("model15", "./images/photomodel15.png");
loadModel("model16", "./images/photomodel16.png");
loadModel("model17", "./images/photomodel17.png");
