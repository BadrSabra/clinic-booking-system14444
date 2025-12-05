// ملف تهيئة النظام
function setupClinicSystem() {
    // فحص المتطلبات
    if (typeof(Storage) === "undefined") {
        alert("المتصفح لا يدعم LocalStorage. يرجى استخدام متصفح حديث.");
        return;
    }
    
    // إنشاء بيانات أولية إذا لم تكن موجودة
    if (!localStorage.getItem('clinic_initialized')) {
        // بيانات الإعدادات
        const settings = {
            clinicName: "عيادتك",
            clinicPhone: "0550000000",
            whatsappNumber: "0550000000",
            doctors: [
                { name: "د. الطبيب الأول", specialty: "تخصص" },
                { name: "د. الطبيب الثاني", specialty: "تخصص" }
            ],
            startTime: "09:00",
            endTime: "17:00",
            slotDuration: 30,
            createdAt: new Date().toISOString()
        };
        
        // حفظ البيانات
        localStorage.setItem('clinic_settings', JSON.stringify(settings));
        localStorage.setItem('clinic_bookings', JSON.stringify([]));
        localStorage.setItem('clinic_initialized', 'true');
        
        // توجيه إلى صفحة الإعدادات
        alert("تم تهيئة النظام بنجاح! يرجى تعديل الإعدادات.");
        window.location.href = "settings.html";
    }
}

// تشغيل التهيئة عند تحميل الصفحة
if (window.location.pathname.includes('index.html') || 
    window.location.pathname === '/') {
    setupClinicSystem();
}
