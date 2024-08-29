// Toggle Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.createElement('button');
    toggleDarkModeButton.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleDarkModeButton);

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Dark Mode Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .dark-mode {
            background-color: #333;
            color: #f4f4f4;
        }

        .dark-mode header {
            background-color: #222;
        }

        .dark-mode footer {
            background-color: #222;
        }

        .dark-mode button {
            background-color: #f4f4f4;
            color: #333;
        }

        .dark-mode button:hover {
            background-color: #ddd;
        }
    </style>
`);
