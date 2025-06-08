---
layout: default
title: Schedule
nav_order: 5
permalink: /schedule/
---

# Daily Schedule

Stay in sync with ATAAH KING daily.

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
      <td>Prayer</td>
      <td>Bible Study</td>
      <td><a class="schedule-link" href="#">Notes</a></td>
    </tr>

    <!-- Three simultaneous events -->
    <tr data-start="01:00" data-end="03:00">
      <td>1:00 AM – 3:00 AM</td>
      <td>Programming</td>
      <td>Emails</td>
      <td>Reading</td>
    </tr>

    <!-- Single event -->
    <tr data-start="03:00" data-end="07:00">
      <td>3:00 AM – 7:00 AM</td>
      <td colspan="3">[Nap]</td>
    </tr>

    <!-- Two simultaneous events -->
    <tr data-start="07:00" data-end="08:00">
      <td>7:00 AM – 8:00 AM</td>
      <td>Hygiene</td>
      <td>Meditation & Meal</td>
      <td>Workout</td>
       <!-- Empty cell for 3rd column -->
    </tr>

    <!-- Single event -->
    <tr data-start="08:00" data-end="11:00">
      <td>8:00 AM – 11:00 AM</td>
      <td>Artist Development</td>
      <td>Music Production</td>
      <td><a class="schedule-link" href="https://linktr.ee/ATAAHKING" target="_blank" rel="noopener">Socials</a></td>
    </tr>

    <!-- Single event -->
    <tr data-start="11:00" data-end="14:00">
      <td>11:00 AM – 2:00 PM</td>
      <td colspan="3"><a class="schedule-link" href="https://tiktok.com/@jussjabzz_/live" target="_blank" rel="noopener">Morning Worship (JUSS JABZZ)</a></td>
    </tr>

    <!-- Single event -->
    <tr data-start="14:00" data-end="18:00">
      <td>2:00 PM – 6:00 PM</td>
      <td colspan="3">[Nap]</td>
    </tr>

    <!-- Single event -->
    <tr data-start="18:00" data-end="21:00">
      <td>6:00 PM – 9:00 PM</td>
      <td>Promotions</td>
      <td>Sales</td>
      <td><a class="schedule-link" href="https://linktr.ee/ATAAHKING" target="_blank" rel="noopener">Socials</a></td>
    </tr>

    <!-- Single event -->
    <tr data-start="21:00" data-end="22:00">
      <td>9:00 PM – 10:00 PM</td>
      <td colspan="3">Advisory / Reflection</td>
    </tr>

    <!-- Single event -->
    <tr data-start="22:00" data-end="23:00">
      <td>10:00 PM – 11:00 PM</td>
      <td colspan="3">Content Creation/Management & Organization</td>
    </tr>

    <!-- Single event -->
    <tr data-start="23:00" data-end="24:00">
      <td>11:00 PM – 12:00 AM</td>
      <td colspan="3">Catch-up / Free Time</td>
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


