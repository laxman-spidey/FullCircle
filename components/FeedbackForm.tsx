"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

interface FeedbackFormData {
    fullname: string;
    email: string;
    subject: string;
    message: string;
    rating: string | null;
}

export default function FeedbackForm() {
    const [formData, setFormData] = useState<FeedbackFormData>({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        rating: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    const validateInputs = (data: FeedbackFormData): Record<string, string> => {
        const errors: Record<string, string> = {};

        if (!data.fullname.trim()) {
            errors.fullname = "Name is required";
        }

        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                errors.email = "Please enter a valid email address";
            }
        }

        if (!data.rating) {
            errors.rating = "Please select a rating";
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitSuccess(null);

        // Validate inputs
        const validationErrors = validateInputs(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(
                    "Thank you for your feedback! We appreciate your input.",
                );

                // Reset form
                setFormData({
                    fullname: "",
                    email: "",
                    subject: "",
                    message: "",
                    rating: null,
                });
                setErrors({});

                // Remove success message after 5 seconds
                setTimeout(() => {
                    setSubmitSuccess(null);
                }, 5000);
            } else {
                const data = await response.json();
                setErrors({
                    submit:
                        data.error ||
                        "There was an issue submitting your feedback. Please try again.",
                });
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setErrors({
                submit: "There was an error submitting your feedback. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name as keyof typeof errors];
                return newErrors;
            });
        }
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            rating: e.target.value,
        }));

        // Clear error when user selects a rating
        if (errors.rating) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.rating;
                return newErrors;
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
                        id="name"
                        name="fullname"
                        placeholder="Enter your name"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        aria-describedby="name-error"
                    />
                    {errors.fullname && (
                        <div id="name-error" className="invalid-feedback">
                            {errors.fullname}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        aria-describedby="email-error"
                    />
                    {errors.email && (
                        <div id="email-error" className="invalid-feedback">
                            {errors.email}
                        </div>
                    )}
                </div>
                <div className="col-md-12">
                    <label htmlFor="subject" className="form-label mb-1">
                        Subject
                    </label>
                    <input
                        type="text"
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        id="subject"
                        name="subject"
                        placeholder="What is this about? (optional)"
                        value={formData.subject}
                        onChange={handleInputChange}
                        aria-describedby="subject-error"
                    />
                    {errors.subject && (
                        <div id="subject-error" className="invalid-feedback">
                            {errors.subject}
                        </div>
                    )}
                </div>
                <div className="col-md-12">
                    <label className="form-label mb-1 d-block">
                        Overall Experience *
                    </label>
                    <div
                        className="rating-section d-flex align-items-center"
                        role="radiogroup"
                        aria-label="Rate your experience from 1 to 5 stars"
                    >
                        <div className="star-rating d-flex flex-row-reverse">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <div
                                    key={star}
                                    className="star-container position-relative"
                                >
                                    <input
                                        type="radio"
                                        id={`star${star}`}
                                        name="rating"
                                        value={star.toString()}
                                        checked={
                                            formData.rating === star.toString()
                                        }
                                        onChange={handleRatingChange}
                                        className="star-input opacity-0 position-absolute top-0 start-0 w-100 h-100 m-0"
                                        aria-label={`${star} star${star !== 1 ? "s" : ""}`}
                                    />
                                    <label
                                        htmlFor={`star${star}`}
                                        className={`star-label d-block cursor-pointer m-0 ${
                                            formData.rating &&
                                            parseInt(formData.rating) >= star
                                                ? "text-warning"
                                                : "text-muted"
                                        }`}
                                        title={`${star} star${star !== 1 ? "s" : ""}`}
                                    >
                                        ★
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.rating && (
                            <div className="invalid-feedback d-block ms-2">
                                {errors.rating}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="message" className="form-label mb-1">
                        Your Feedback
                    </label>
                    <textarea
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your experience... (optional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        aria-describedby="message-error"
                    ></textarea>
                    {errors.message && (
                        <div id="message-error" className="invalid-feedback">
                            {errors.message}
                        </div>
                    )}
                </div>
                <div className="col-md-12 text-center">
                    {submitSuccess && (
                        <div className="alert alert-success mt-1" role="alert">
                            {submitSuccess}
                        </div>
                    )}

                    {errors.submit && (
                        <div className="alert alert-danger mt-1" role="alert">
                            {errors.submit}
                        </div>
                    )}

                    <Button
                        variant="secondary"
                        type="submit"
                        className="mt-2"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Submitting...
                            </>
                        ) : (
                            "Submit Feedback"
                        )}
                    </Button>

                    <div className="form-text mt-1">
                        Fields marked with * are required
                    </div>
                </div>
            </div>
        </form>
    );
}
