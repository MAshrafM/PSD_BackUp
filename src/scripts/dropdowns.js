const dropdown = $('.form__dropdown');
dropdown.selectmenu();

const dropdownBtn = dropdown.siblings('.ui-selectmenu-button'),
      dropdownBtnText = dropdownBtn.find('.ui-selectmenu-text'),
      dropdownBtnIcon = dropdownBtn.find('.ui-selectmenu-icon');
      
dropdownBtn.addClass('dropdown-select-btn dropdown-select-btn-add-class');
dropdownBtnText.addClass('dropdown-select-btn__text');
dropdownBtnIcon.addClass('dropdown-select-btn__icon dropdown-select-btn-add-class__icon');

        
        
const pricingDropdownForm = $('.pricing-table__dropdown-form'),
      pricingDropdownBtn = pricingDropdownForm.find('.ui-selectmenu-button');

pricingDropdownBtn.addClass('pricing-table__dropdown-select-btn');

const dropdownList = $('.ui-selectmenu-menu');
dropdownList.addClass('dropdown-select pricing-table__dropdown-select')
            .find('ul')
            .addClass('dropdown-select__list pricing-table__dropdown-select-list')
            .find('li')
            .addClass('pricing-table__dropdown-select-item')
            .find('div')
            .addClass('pricing-table__dropdown-select-item-block');