function goToPage(time) {
    // 時間ごとに異なるページのマッピング
    const pageMap = {
        "10:00": "reservations.html",
        "10:30": "appointment.html",
        "11:00": "calendar.html",
        "11:30": "calendar.html",
        "12:00": "calendar.html",
        "12:30": "calendar.html",
        "13:00": "calendar.html",
        "13:30": "calendar.html",
        "14:00": "calendar.html",
        "14:30": "calendar.html",
        "15:00": "calendar.html",
        "15:30": "calendar.html",
        "16:00": "calendar.html",
        "16:30": "calendar.html",
        "17:00": "calendar.html",
        "17:30": "calendar.html",
    }
    // 該当するページがあれば遷移、なければデフォルトページへ
    const targetPage = pageMap[time] || "calendar.html";
    window.location.href = targetPage;
}