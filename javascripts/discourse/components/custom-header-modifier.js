// Listen for changes in the theme component settings
api.onSettingsChange(settings => {
  // Update header color
  const headerColor = settings.Header_Color;
  document.querySelector('.header').style.backgroundColor = headerColor;
  
  // Update logo size
  const logoWidth = settings.Logo_Width;
  const logoHeight = settings.Logo_Height;
  document.querySelector('.logo').style.width = logoWidth + 'px';
  document.querySelector('.logo').style.height = logoHeight + 'px';
  
  // Update header font
  const headerFont = settings.Header_Font;
  document.querySelector('.header').style.fontFamily = headerFont;
  
  // Update header height
  const headerHeight = settings.Header_Height;
  document.querySelector('.header').style.height = headerHeight + 'px';
  
  // Update header text
  const headerText = settings.Header_Text;
  document.querySelector('.header').innerText = headerText;
  
  // Update header icons
  const icon1 = settings.Icon_1;
  const icon2 = settings.Icon_2;
  const icon3 = settings.Icon_3;
  document.querySelector('.icon1').classList.add(icon1);
  document.querySelector('.icon2').classList.add(icon2);
  document.querySelector('.icon3').classList.add(icon3);
});
