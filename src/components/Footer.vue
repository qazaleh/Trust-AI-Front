<script setup>
import { MapPin, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">

    <div class="footer-container">

      <!-- Brand -->
      <div class="footer-brand">
        <h3>TrustAI</h3>
        <p>
          {{ $t('footer.tagline') }}
        </p>
      </div>

      <!-- Address -->
      <div class="footer-block">
        <div class="footer-item">
          <MapPin :size="18" />
          <span>
            Dijital Park Teknokent,<br>
            Ataşehir / İstanbul
          </span>
        </div>
      </div>

      <!-- Email -->
      <div class="footer-block">
        <div class="footer-item">
          <Mail :size="18" />
          <a href="mailto:info@trustai.com.tr">
            info@trustai.com.tr
          </a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} {{ $t('footer.rights') }}
    </div>

  </footer>
</template>

<style scoped>
.footer {
  /* margin-top: 120px; */
  padding: 60px 80px 30px;
  background: linear-gradient(180deg, #ffffff, #f7f8fc);
  border-top: 1px solid #ececec;
}

/* layout */
.footer-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* brand */
.footer-brand h3 {
  font-size: 20px;
  color: #161E54;
  margin-bottom: 10px;
}

.footer-brand p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  max-width: 300px;
}

/* block */
.footer-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 14px;
  color: #555;
}

/* make lucide visible */
.footer-item svg {
  stroke: #161E54;
  flex-shrink: 0;
  margin-top: 2px;
}

/* link */
.footer-item a {
  text-decoration: none;
  color: #161E54;
  transition: 0.2s ease;
}

.footer-item a:hover {
  opacity: 0.7;
}

/* bottom */
.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ececec;
  font-size: 12px;
  color: #999;
  text-align: center;
}

/* responsive */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>