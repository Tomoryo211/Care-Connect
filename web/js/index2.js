function goToPage(time) {
    // 時間ごとに異なるページのマッピング
    const pageMap = {
        "10:00": "reservations2..html",
        "10:30": "appointment.html",
        "11:00": "reservation_table.html",
        "11:30": "reservation_table.html",
        "12:00": "reservation_table.html",
        "12:30": "reservation_table.html",
        "13:00": "reservation_table.html",
        "13:30": "reservation_table.html",
        "14:00": "reservation_table.html",
        "14:30": "reservation_table.html",
        "15:00": "reservation_table.html",
        "15:30": "reservation_table.html",
    };

    // 該当するページがあれば遷移、なければデフォルトページへ
    const targetPage = pageMap[time] || "reservation_table.html";
    window.location.href = targetPage;
}