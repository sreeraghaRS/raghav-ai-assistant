async function askRaghav() {
  const input = document.getElementById("user-input").value.trim();
  if (!input) return;

  const chatlogs = document.getElementById("chatlogs");
  chatlogs.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"  // your actual key
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are Raghav, a helpful and friendly AI assistant." },
          { role: "user", content: input }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    chatlogs.innerHTML += `<p><strong>Raghav:</strong> ${reply}</p>`;
  } catch (error) {
    chatlogs.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
  }

  document.getElementById("user-input").value = "";
  chatlogs.scrollTop = chatlogs.scrollHeight;
}
