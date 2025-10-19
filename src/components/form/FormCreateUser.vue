<template>
    <div class="auth-form-wrapper">
        <h3>Welcome to the website</h3>

        <form class="auth-form" @submit.prevent.stop="createUserAuth">
            <div class="form-field">
                <label for="inName" class="form-label">
                    Name <span class="required-indicator">*</span>
                </label>

                <div class="form-input-group">
                    <input type="text" name="name" id="inName" class="form-input" placeholder="Rafaela Santos" />

                    <div class="form-input-icon">
                        <User color="#fff" />
                    </div>
                </div>
            </div>

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

            <div class="auth-btn">
                <button type="submit">Sign Up Now</button>
            </div>
        </form>

        <div class="auth-login">
            Already have account?
            <router-link :to="{ name: 'login' }" class="auth-link">Log in</router-link>
        </div>
    </div>
</template>

<script setup>
import { LockKeyhole, Mail, User } from 'lucide-vue-next';

const createUserAuth = () => {
    console.log('Realizando login');
}

</script>