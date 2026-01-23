type PasswordStrength = {
  score: number;
  feedback?: string[];
  feedbackResult: string;
};

export const evaluatePasswordStrength = (
  password: string
): PasswordStrength => {
  const feedback: string[] = [];
  let score = 0;

  if (!password) {
    return {
      score: 0,
      feedback: ["The password cannot be empty"],
      feedbackResult: "The password cannot be empty"
    };
  }

  const criteria = {
    length: password.length,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    noRepeatingChars: !/(.)\1{2,}/.test(password),
    noSequentialChars:
      !/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|\d{3,})/i.test(
        password
      )
  };

  if (criteria.length >= 12) {
    score += 30;
    feedback.push("✓ Excellent password length");
  } else if (criteria.length >= 8) {
    score += 20;
    feedback.push("✓ Good password length");
  } else if (criteria.length >= 6) {
    score += 10;
    feedback.push("⚠️ Password is too short");
  } else {
    score += 5;
    feedback.push("❌ Very short password (minimum 6 characters)");
  }

  if (criteria.hasLowercase) {
    score += 10;
    feedback.push("✓ There are lowercase letters");
  } else {
    feedback.push("❌ Add lowercase letters");
  }

  if (criteria.hasUppercase) {
    score += 10;
    feedback.push("✓ There are capital letters");
  } else {
    feedback.push("❌ Add capital letters");
  }

  if (criteria.hasNumbers) {
    score += 10;
    feedback.push("✓ There are numbers");
  } else {
    feedback.push("❌ Add numbers");
  }

  if (criteria.hasSpecialChars) {
    score += 15;
    feedback.push("✓ There are special characters");
  } else {
    feedback.push("⚠️ Add special characters (!@#$%)");
  }

  if (criteria.noRepeatingChars) {
    score += 10;
    feedback.push("✓ No repeating characters in a row");
  } else {
    feedback.push("⚠️ Avoid repeating characters");
  }

  if (criteria.noSequentialChars) {
    score += 10;
    feedback.push("✓ No simple sequences");
  } else {
    feedback.push("⚠️ Avoid sequences (abc, 123)");
  }

  const uniqueChars = new Set(password).size;
  const diversityRatio = uniqueChars / password.length;

  if (diversityRatio > 0.8) {
    score += 5;
    feedback.push("✓ Great variety of symbols");
  } else if (diversityRatio > 0.6) {
    score += 3;
    feedback.push("✓ Good variety of characters");
  } else {
    feedback.push("⚠️ Use more varied symbols");
  }

  const commonPasswords = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "welcome",
    "password123",
    "12345678",
    "123456789",
    "1234567890"
  ];

  if (commonPasswords.includes(password.toLowerCase())) {
    score = Math.max(0, score - 30);
    feedback.push("❌ Very common password");
  }

  if (/^\d+$/.test(password) || /^[a-zA-Z]+$/.test(password)) {
    score = Math.max(0, score - 15);
    feedback.push(
      "⚠️ The password consists only of numbers or only of letters"
    );
  }

  score = Math.max(0, Math.min(100, Math.round(score)));

  const strengthLevel =
    score >= 80
      ? "Very reliable"
      : score >= 60
        ? "Reliable"
        : score >= 40
          ? "Average"
          : score >= 20
            ? "Weak"
            : "Very weak";

  return {
    score,
    feedback,
    feedbackResult: `Difficulty rating: ${strengthLevel}`
  };
};
