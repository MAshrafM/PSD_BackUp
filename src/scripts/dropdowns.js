const dropdown = $('.form__dropdown');
dropdown.selectmenu();

const dropdownBtn = dropdown.siblings('.ui-selectmenu-button'),
      dropdownBtnText = dropdownBtn.find('.ui-selectmenu-text'),
      dropdownBtnIcon = dropdownBtn.find('.ui-selectmenu-icon'),
      dropdownList = $('.ui-selectmenu-menu');
dropdownBtn.addClass('dropdown-select-btn dropdown-select-btn-add-class');
dropdownBtnText.addClass('dropdown-select-btn__text');
dropdownBtnIcon.addClass('dropdown-select-btn__icon dropdown-select-btn-add-class__icon');
dropdownList.addClass('dropdown-select')
        .find('ul').addClass('dropdown-select__list');
        
        
const pricingDropdownForm = $('.pricing-table__dropdown-form'),
      pricingDropdownSelect = pricingDropdownForm.find('select'),
      pricingDropdownBtn = pricingDropdownForm.find('.ui-selectmenu-button'),
      pricingDropdownList = $('.ui-selectmenu-menu');

pricingDropdownBtn.addClass('pricing-table__dropdown-select-btn');
pricingDropdownList.addClass('pricing-table__dropdown-select')
        .find('ul').addClass('pricing-table__dropdown-select-list')
        .find('li').addClass('pricing-table__dropdown-select-item')
        .find('div').addClass('pricing-table__dropdown-select-item-block');