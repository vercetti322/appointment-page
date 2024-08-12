import { writable } from "svelte/store";

export const formInfo = writable ({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    appointmentReason: ''
})

export const OTP = writable('');