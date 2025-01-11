import React from 'react';

const ImageUploadPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}> {/* Increased margin-top to 100px */}
      <h1>Uploaded Images</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', justifyContent: 'center', marginTop: '60px' }}> {/* Increased margin-top to 60px */}
        {/* First Image */}
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <a href="https://drive.google.com/file/d/1TCNtBXIVlgZFSwlUEh1L3AQuGIS1GxTR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Click here to view our copyright checklist
          </a>
        </div>
        
        {/* Second Image */}
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <a href="https://drive.google.com/file/d/1y15MTuBoonFLY98Npt1UAHnivKnE2tHw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Click here to view our Plan of Work log
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div style={{ marginTop: '100px', textAlign: 'left', display: 'inline-block' }}> {/* Increased margin-top to 100px for more space */}
        <h2>Work Cited</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>
            “Cheesy Scrambled Eggs Recipe - Breakfast.” Food.com, https://www.food.com/recipe/cheesy-scrambled-eggs-44656#recipe. Accessed 10 January 2025.
          </li>
          <li>
            Edwards, Ashlyn. “Cheesy Bacon Stuffed Mini Peppers.” Belle of the Kitchen, 26 February 2016, https://belleofthekitchen.com/cheesy-bacon-stuffed-mini-peppers/. Accessed 10 January 2025.
          </li>
          <li>
            Erhardt, Caitlyn. “Vegetarian Quesadillas with Black Beans and Sweet Potato.” Erhardts Eat, 23 February 2019, https://erhardtseat.com/vegetarian-quesadillas/. Accessed 10 January 2025.
          </li>
          <li>
            Pallotta, Nico. “Spaghetti Aglio e Olio.” The Plant Based School, 28 April 2023, https://theplantbasedschool.com/spaghetti-aglio-e-olio/. Accessed 10 January 2025.
          </li>
          <li>
            “Vegan Mediterranean Buddha Bowls (w/ tahini dressing).” Clean Plate Mama, 2 September 2021, https://cleanplatemama.com/vegetarian-greek-salad-bowl/. Accessed 10 January 2025.
          </li>
          <li>
            Vora, Nisha. “Amazing One-Pot Vegan Chili Mac.” Rainbow Plant Life, 31 January 2020, https://rainbowplantlife.com/one-pot-vegan-chili-mac/. Accessed 10 January 2025.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploadPage;
