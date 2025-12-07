// Feedback form submission handling
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Clear previous error messages
            clearErrors();

            // Get form data
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const rating = document.querySelector(
                'input[name="rating"]:checked',
            );
            const message = document.getElementById("message").value.trim();

            let hasErrors = false;

            // Validate fields
            if (!name) {
                showError("name", "Please enter your name.");
                hasErrors = true;
            }

            if (!email) {
                showError("email", "Please enter your email address.");
                hasErrors = true;
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showError("email", "Please enter a valid email address.");
                    hasErrors = true;
                }
            }

            if (!subject) {
                showError("subject", "Please enter a subject.");
                hasErrors = true;
            }

            if (!rating) {
                showError(
                    "rating",
                    "Please select your overall experience rating.",
                );
                hasErrors = true;
            }

            if (!message) {
                showError("message", "Please enter your feedback message.");
                hasErrors = true;
            }

            // If there are errors, stop form submission
            if (hasErrors) {
                return;
            }

            // If no errors, send data to backend
            const formData = {
                fullname: name, // Changed to match API expectation
                email: email,
                subject: subject,
                rating: rating ? rating.value : null,
                message: message,
            };

            // Send form data to backend API
            fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message) {
                        alert(
                            "Thank you for your feedback! We appreciate your input.",
                        );
                        feedbackForm.reset();
                    } else {
                        alert(
                            "There was an issue submitting your feedback. Please try again.",
                        );
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert(
                        "There was an error submitting your feedback. Please try again.",
                    );
                });
        });
    }

    // Function to show error message
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement("div");
        errorDiv.className = "text-danger mt-1";
        errorDiv.id = fieldId + "-error";
        errorDiv.textContent = message;

        if (fieldId === "rating") {
            // For the rating section, find the container
            const ratingSection = document.querySelector(".rating-section");
            ratingSection.appendChild(errorDiv);
        } else {
            field.parentNode.appendChild(errorDiv);
        }

        // Add error styling to the field
        field.classList.add("is-invalid");
    }

    // Function to clear error messages
    function clearErrors() {
        // Remove all error elements
        const errorElements = document.querySelectorAll(
            '.text-danger[id$="-error"]',
        );
        errorElements.forEach((element) => element.remove());

        // Remove error styling from fields
        const invalidFields = document.querySelectorAll(".is-invalid");
        invalidFields.forEach((field) => field.classList.remove("is-invalid"));

        // Remove error styling from rating section
        const ratingInputs = document.querySelectorAll('input[name="rating"]');
        ratingInputs.forEach((input) => {
            const parentLabel = input.parentElement;
            parentLabel.classList.remove("is-invalid");
        });
    }
});
