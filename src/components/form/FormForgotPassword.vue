<template>
    <div class="auth-form-wrapper">
        <h3>Please enter your email address to verification, if you have account.</h3>

        <form class="auth-form" @submit.prevent.stop="loginAuth">
            <div class="form-field">
                <label for="inEmail" class="form-label">
                    Email <span class="required-indicator">*</span>
                </label>

                <div class="form-input-group">
                    <input type="email" name="email" id="inEmail" class="form-input"
                        placeholder="rafaela@example.com" />

                    <div class="form-input-icon">
                        <Mail color="#fff" />
                    </div>
                </div>
            </div>

            <div v-if="tokenIsValidated">
                <div class="form-field">
                    <label for="inPassword" class="form-label">
                        Password <span class="required-indicator">*</span>
                    </label>

                    <div class="form-input-group">
                        <input type="password" name="password" id="inPassword" class="form-input"
                            placeholder="***************" />

                        <div class="form-input-icon">
                            <LockKeyhole color="#fff" />
                        </div>
                    </div>
                </div>

                <div class="form-field">
                    <label for="inConfirmPassword" class="form-label">
                        Confirm Password <span class="required-indicator">*</span>
                    </label>

                    <div class="form-input-group">
                        <input type="password" name="confirmPassword" id="inConfirmPassword" class="form-input"
                            placeholder="***************" />

                        <div class="form-input-icon">
                            <LockKeyhole color="#fff" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="auth-btn">
                <button type="submit">Send</button>
            </div>
        </form>

        <div class="auth-create-account">
            You remember your password? 
            <router-link to="/create-user" class="auth-link">Log in</router-link>
        </div>
    </div>
</template>

<script setup>
import { LockKeyhole, Mail } from 'lucide-vue-next';
import { ref } from 'vue';

const tokenIsValidated = ref(false);

const loginAuth = () => {
    console.log('Realizando login');
}

</script>