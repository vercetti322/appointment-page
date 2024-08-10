<script>
  let name = '';
  let email = '';
  let phone = '';
  let preferredDate = '';
  let preferredTime = '';
  let reasonForAppointment = '';
  let consentToTreatment = false;

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      reasonForAppointment,
      consentToTreatment,
    });
  };
</script>

<main>
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-header" style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-top: -7.5px">
        <h1 style="margin-bottom: -4px; color: #09677E; margin-top: 0">BeKind 💚</h1>
        <p style="font-weight: 600;">Fill the form 📝 below to get your first appointment</p>
        <p style="font-size: 12px; margin-top: 0; color: #044757; font-weight: 800">⚠️ All fields are mandatory</p>
      </div>
      <div class="form-group">
        <label for="name">Full Name 🖊️</label>
        <input id="name" bind:value={name} type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email Address 📧</label>
        <input id="email" bind:value={email} type="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number 📱</label>
        <input id="phone" bind:value={phone} type="tel" required />
      </div>

      <div class="form-group">
        <label for="preferredDate">Preferred Date 📅</label>
        <input
          id="preferredDate"
          bind:value={preferredDate}
          type="date"
          required
        />
      </div>

      <div class="form-group">
        <label for="preferredTime">Preferred Time ⏰</label>
        <input
          id="preferredTime"
          bind:value={preferredTime}
          type="time"
          required
        />
      </div>

      <div class="form-group">
        <label for="reasonForAppointment">Reason for Appointment 💬</label>
        <textarea
          id="reasonForAppointment"
          bind:value={reasonForAppointment}
          rows="4"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label>
          <input
            id="consentToTreatment"
            type="checkbox"
            bind:checked={consentToTreatment}
          />
          I consent to treatment
        </label>
      </div>

      <div class="form-group">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</main>

<style>
  .form-container {
    margin-top: 70px;
    margin-bottom: 70px;
    margin-left: 175px;
    max-width: 600px;
    padding: 30px;
    border: 1px solid white;
    border-radius: 8px;
    color: #044757;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-group input[type='checkbox'] {
    width: auto;
    margin-right: 10px;
  }

  .form-group input[type='submit'] {
    background-color: #09677E;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  }

  .form-group input[type='submit']:hover {
    background-color: #044757;
  }
</style>
