<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { CheckCircle2, Loader2, Mail, Send, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import { Button } from '@/components/ui/button'

const { t, tm } = useI18n()

const isOpen = ref(false)
const toastVisible = ref(false)
const status = ref('idle')
const nameInput = ref(null)
const submitTimer = ref(null)
const toastTimer = ref(null)

const form = reactive({
  name: '',
  email: '',
  organization: '',
  topic: '',
  message: '',
})

const topicOptions = computed(() => {
  const value = tm('contactForm.topics')
  return Array.isArray(value) ? value : []
})

const buttonLabel = computed(() => {
  if (status.value === 'sending') return t('contactForm.button.sending')
  if (status.value === 'sent') return t('contactForm.button.sent')
  return t('contactForm.button.idle')
})

watch(
  topicOptions,
  (options) => {
    if (!form.topic && options.length > 0) {
      form.topic = options[0].value
    }
  },
  { immediate: true }
)

function openDialog() {
  status.value = 'idle'
  isOpen.value = true
  nextTick(() => nameInput.value?.focus())
}

function closeDialog() {
  isOpen.value = false
}

function markDirty() {
  if (status.value === 'sent') {
    status.value = 'idle'
  }
}

function resetSubmitTimer() {
  if (submitTimer.value) {
    clearTimeout(submitTimer.value)
    submitTimer.value = null
  }
}

function resetToastTimer() {
  if (toastTimer.value) {
    clearTimeout(toastTimer.value)
    toastTimer.value = null
  }
}

function resetForm() {
  form.name = ''
  form.email = ''
  form.organization = ''
  form.message = ''
  form.topic = topicOptions.value[0]?.value ?? ''
}

function showToast() {
  resetToastTimer()
  toastVisible.value = true
  toastTimer.value = setTimeout(() => {
    toastVisible.value = false
    toastTimer.value = null
  }, 4200)
}

function submitForm() {
  resetSubmitTimer()
  status.value = 'sending'
  submitTimer.value = setTimeout(() => {
    status.value = 'idle'
    isOpen.value = false
    resetForm()
    showToast()
    submitTimer.value = null
  }, 1200)
}

function handleGlobalClick(event) {
  const target = event.target

  if (!(target instanceof Element)) return

  const contactLink = target.closest('a[href^="mailto:info@trustai.com.tr"]')

  if (!contactLink) return

  event.preventDefault()
  openDialog()
}

function handleKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    closeDialog()
  }
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  resetSubmitTimer()
  resetToastTimer()
  document.removeEventListener('click', handleGlobalClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Transition name="contact-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-primary/60 px-4 py-6 backdrop-blur-sm"
      @click.self="closeDialog"
    >
      <section
        role="dialog"
        aria-modal="true"
        :aria-label="$t('contactForm.title')"
        class="max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-[8px] bg-card shadow-[0_28px_80px_-44px_rgba(15,43,44,0.8)]"
      >
        <header class="flex items-start justify-between gap-5 bg-primary px-5 py-5 text-primary-foreground sm:px-6">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm font-bold text-accent">
              <Mail class="size-4" />
              {{ $t('contactForm.eyebrow') }}
            </div>
            <div class="space-y-2">
              <h2 class="text-2xl font-semibold tracking-tight">{{ $t('contactForm.title') }}</h2>
              <p class="max-w-xl text-sm leading-7 text-white/78">{{ $t('contactForm.description') }}</p>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-white/10 text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-accent"
            :aria-label="$t('contactForm.close')"
            @click="closeDialog"
          >
            <X class="size-4" />
          </button>
        </header>

        <form class="grid gap-4 px-5 py-5 sm:px-6 sm:py-6" @submit.prevent="submitForm" @input="markDirty" @change="markDirty">
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-semibold text-muted-foreground">
              {{ $t('contactForm.fields.name') }}
              <input
                ref="nameInput"
                v-model="form.name"
                required
                autocomplete="name"
                class="h-11 rounded-[8px] border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                :placeholder="$t('contactForm.placeholders.name')"
              />
            </label>

            <label class="grid gap-2 text-sm font-semibold text-muted-foreground">
              {{ $t('contactForm.fields.email') }}
              <input
                v-model="form.email"
                required
                type="email"
                autocomplete="email"
                class="h-11 rounded-[8px] border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                :placeholder="$t('contactForm.placeholders.email')"
              />
            </label>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-semibold text-muted-foreground">
              {{ $t('contactForm.fields.organization') }}
              <input
                v-model="form.organization"
                autocomplete="organization"
                class="h-11 rounded-[8px] border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
                :placeholder="$t('contactForm.placeholders.organization')"
              />
            </label>

            <label class="grid gap-2 text-sm font-semibold text-muted-foreground">
              {{ $t('contactForm.fields.topic') }}
              <select
                v-model="form.topic"
                required
                class="h-11 rounded-[8px] border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
              >
                <option v-for="option in topicOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </label>
          </div>

          <label class="grid gap-2 text-sm font-semibold text-muted-foreground">
            {{ $t('contactForm.fields.message') }}
            <textarea
              v-model="form.message"
              required
              rows="5"
              class="min-h-32 rounded-[8px] border border-border bg-background px-3 py-3 text-sm leading-6 text-foreground outline-none transition focus:border-primary focus:ring-3 focus:ring-primary/15"
              :placeholder="$t('contactForm.placeholders.message')"
            />
          </label>

          <div class="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" size="lg" class="rounded-[8px]" @click="closeDialog">
              {{ $t('contactForm.cancel') }}
            </Button>
            <Button
              type="submit"
              size="lg"
              class="rounded-[8px] bg-accent text-accent-foreground hover:bg-accent/90"
              :disabled="status === 'sending'"
            >
              <Loader2 v-if="status === 'sending'" class="size-4 animate-spin" />
              <CheckCircle2 v-else-if="status === 'sent'" class="size-4" />
              <Send v-else class="size-4" />
              {{ buttonLabel }}
            </Button>
          </div>
        </form>
      </section>
    </div>
  </Transition>

  <Transition name="contact-toast">
    <div
      v-if="toastVisible"
      class="fixed left-1/2 top-6 z-[120] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-[8px] border border-primary/12 bg-card px-4 py-4 text-foreground shadow-[0_20px_50px_-30px_rgba(15,43,44,0.8)]"
      role="status"
      aria-live="polite"
    >
      <div class="flex items-start gap-3">
        <div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-secondary text-primary">
          <CheckCircle2 class="size-5" />
        </div>
        <div class="space-y-1">
          <p class="text-sm font-bold text-muted-foreground">{{ $t('contactForm.toastTitle') }}</p>
          <p class="text-sm leading-6 text-foreground">{{ $t('contactForm.toastDescription') }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.contact-fade-enter-active,
.contact-fade-leave-active {
  transition: opacity 180ms ease;
}

.contact-fade-enter-from,
.contact-fade-leave-to {
  opacity: 0;
}

.contact-toast-enter-active,
.contact-toast-leave-active {
  transition:
    opacity 240ms ease,
    transform 240ms ease;
}

.contact-toast-enter-from,
.contact-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -12px);
}
</style>
