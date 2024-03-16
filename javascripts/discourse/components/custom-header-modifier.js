<script type="text/discourse-plugin" version="0.8">
  api.onPageChange(() => {
    const header = document.querySelector('.d-header');
    if (!header) return;

    const headerColor = api.container.appEvents.getState('headerColor');
    const logoUrl = api.container.appEvents.getState('logoUrl');
    const logoWidth = api.container.appEvents.getState('logoWidth') || 'auto';
    const logoHeight = api.container.appEvents.getState('logoHeight') || 'auto';
    const headerFont = api.container.appEvents.getState('headerFont') || 'inherit';
    const headerHeight = api.container.appEvents.getState('headerHeight') || 'auto';
    const headerText = api.container.appEvents.getState('headerText') || '';
    const icon1 = api.container.appEvents.getState('icon1') || '';
    const icon2 = api.container.appEvents.getState('icon2') || '';
    const icon3 = api.container.appEvents.getState('icon3') || '';

    header.style.backgroundColor = headerColor || '';
    header.style.height = headerHeight + 'px';
    header.style.fontFamily = headerFont || '';

    const logo = header.querySelector('.d-header-logo img');
    if (logo && logoUrl) {
      logo.src = logoUrl;
      logo.style.width = logoWidth + 'px';
      logo.style.height = logoHeight + 'px';
    }

    const title = header.querySelector('.title');
    if (title) title.textContent = headerText;

    const icons = header.querySelector('.d-header-icons');
    if (icons) {
      icons.innerHTML = `
        <i class="fa ${icon1}"></i>
        <i class="fa ${icon2}"></i>
        <i class="fa ${icon3}"></i>
      `;
    }
  });
</script>
