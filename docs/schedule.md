---
layout: default
title: Daily Schedule
nav_order: 5
permalink: /schedule/
---

# Daily Schedule

Stay in sync with the daily mission.

<table class="schedule-table" id="daily-schedule">
  <thead>
    <tr>
      <th>Time</th>
      <th colspan="3">Task(s)</th>
    </tr>
  </thead>
  <tbody>
    <!-- Single event (full width) -->
    <tr data-start="00:00" data-end="01:00">
      <td>12:00 AM – 1:00 AM</td>
      <td colspan="3">Prayer & Bible Study</td>
    </tr>

    <!-- Two simultaneous events -->
    <tr data-start="01:00" data-end="02:00">
      <td>1:00 AM – 2:00 AM</td>
      <td>Workout</td>
      <td>Meal</td>
      <td></td> <!-- Empty cell for 3rd column -->
    </tr>

    <!-- Three simultaneous events -->
    <tr data-start="02:00" data-end="04:00">
      <td>2:00 AM – 4:00 AM</td>
      <td>Programming</td>
      <td>Emails</td>
      <td>Reading</td>
    </tr>

    <!-- Single event -->
    <tr data-start="04:00" data-end="06:00">
      <td>4:00 AM – 6:00 AM</td>
      <td colspan="3">Music Production</td>
    </tr>

    <!-- Single event -->
    <tr data-start="06:00" data-end="08:00">
      <td>6:00 AM – 8:00 AM</td>
      <td colspan="3">Social Media / Email / Reading</td>
    </tr>

    <!-- Single event -->
    <tr data-start="08:00" data-end="14:00">
      <td>8:00 AM – 2:00 PM</td>
      <td colspan="3">Morning Worship (JUSS JABZZ)</td>
    </tr>

    <!-- Single event -->
    <tr data-start="14:00" data-end="18:00">
      <td>2:00 PM – 6:00 PM</td>
      <td colspan="3">Promo Campaigns / Trading / Sales</td>
    </tr>

    <!-- Single event -->
    <tr data-start="18:00" data-end="22:00">
      <td>6:00 PM – 10:00 PM</td>
      <td colspan="3">Content Creation / Rehearsals</td>
    </tr>

    <!-- Single event -->
    <tr data-start="22:00" data-end="24:00">
      <td>10:00 PM – 12:00 AM</td>
      <td colspan="3">Reflection / Free Time</td>
    </tr>
  </tbody>
</table>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("#daily-schedule tr[data-start]");
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  rows.forEach(row => {
    const start = row.getAttribute("data-start");
    const end = row.getAttribute("data-end");

    if (currentTime >= start && currentTime < end) {
      row.classList.add("current-time-row");
    }
  });
});
</script>


