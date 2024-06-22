import React, { useState } from 'react';
import GoogleTranslate from 'google-translate';

const googleTranslate = GoogleTranslate('YOUR_API_KEY');

const TranslationComponent = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');

  const handleTranslate = () => {
    googleTranslate.translate(text, targetLanguage, (err, translation) => {
      if (err) {
        console.error('Error translating text:', err);
      } else {
        setTranslatedText(translation.translatedText);
      }
    });
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>Translated Text: {translatedText}</p>}
    </div>
  );
};

export default TranslationComponent;
