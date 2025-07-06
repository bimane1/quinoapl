document.addEventListener('DOMContentLoaded', function() {
    const cameraBtn = document.getElementById('cameraBtn');
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const resultContainer = document.getElementById('resultContainer');
    const identificationResult = document.getElementById('identificationResult');
    const retryBtn = document.getElementById('retryBtn');

    // عند النقر على أيقونة الكاميرا
    cameraBtn.addEventListener('click', function() {
        fileInput.click();
    });

    // عند اختيار صورة
    fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                previewImage.src = event.target.result;
                cameraBtn.style.display = 'none';
                resultContainer.style.display = 'block';
                
                // هنا يمكنك إضافة كود للتعرف على النبات
                identifyPlant(e.target.files[0]);
            };
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // زر المحاولة مرة أخرى
    retryBtn.addEventListener('click', function() {
        cameraBtn.style.display = 'block';
        resultContainer.style.display = 'none';
        fileInput.value = '';
    });

    // دالة محاكاة للتعرف على النبات (يمكن استبدالها بوظيفة حقيقية)
    function identifyPlant(imageFile) {
        // هذه مجرد محاكاة - في التطبيق الحقيقي، يمكنك استخدام API للتعرف على النباتات
        identificationResult.innerHTML = `
            <h3>Quinoa Plant Identified</h3>
            <p>Confidence: 92%</p>
            <p>Characteristics:</p>
            <ul>
                <li>Scientific Name: Chenopodium quinoa</li>
                <li>Family: Amaranthaceae</li>
                <li>Edible Parts: Seeds and leaves</li>
            </ul>
            <p>This appears to be a healthy quinoa plant. The seeds are ready for harvest when they're firm and the leaves have started to yellow.</p>
        `;
        
        // في التطبيق الحقيقي، يمكنك استخدام:
        // fetch('API_ENDPOINT', { method: 'POST', body: formData })
        // .then(response => response.json())
        // .then(data => {
        //     identificationResult.innerHTML = processIdentificationData(data);
        // });
    }
});