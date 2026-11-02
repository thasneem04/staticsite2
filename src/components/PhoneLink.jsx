import React from "react";
import { useTranslation } from "react-i18next";

const ARABIC_INDIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

const toArabicIndicDigits = (value) =>
  value.replace(/[0-9]/g, (digit) => ARABIC_INDIC_DIGITS[digit]);

// Phone numbers always read left-to-right; Arabic pages show Arabic-Indic digits.
const PhoneLink = ({ number, display }) => {
  const { i18n } = useTranslation();
  const label = i18n.language === "ar" ? toArabicIndicDigits(display) : display;

  return (
    <a href={`tel:${number}`} dir="ltr">
      {label}
    </a>
  );
};

export default PhoneLink;
