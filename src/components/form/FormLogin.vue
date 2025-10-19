<template>
    <div class="auth-form-wrapper">
        <h3>Welcome back to the website</h3>

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

            <div class="auth-btn">
                <button type="submit">Login Now</button>
            </div>
        </form>

        <div class="auth-forget-password">
            <router-link to="/forgot-password" class="auth-link">Forgot Password?</router-link>
        </div>

        <div class="auth-create-account">
            Don't have account?
            <router-link to="/create-user" class="auth-link">Sign up</router-link>
        </div>
    </div>
</template>

<script setup>
import { LockKeyhole, Mail } from 'lucide-vue-next';

const loginAuth = () => {
    console.log('Realizando login');
}

</script>