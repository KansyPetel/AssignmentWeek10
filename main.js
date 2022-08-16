window.addEventListener('load', () => {
    const form = document.querySelector('#new-plan-form');
    const input = document.querySelector('#new-plan-input');
    const list_el = document.querySelector('#plans');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

       const plans = input.value;

       if (!plans) {
        alert ('Please fill out the plans');
        return;
       }
       
       const plans_el = document.createElement('div');
       plans_el.classList.add('plans');
       
       const plans_content_el = document.createElement('div');
       plans_content_el.classList.add('content');
      
       

       plans_el.appendChild(plans_content_el);

       const plans_input_el = document.createElement('input');
       plans_input_el.classList.add('text');
       plans_input_el.type = 'text';
       plans_input_el.value = plans;
       plans_input_el.setAttribute('readonly', 'readonly');

       plans_content_el.appendChild(plans_input_el);



       const plans_actions_el = document.createElement('div');
       plans_actions_el.classList.add('actions');

       const plans_edit_el = document.createElement('button');
       plans_edit_el.classList.add('edit');
       plans_edit_el.innerHTML = 'Edit';

       const plans_delete_el = document.createElement('button');
       plans_delete_el.classList.add('delete');
       plans_delete_el.innerHTML = 'Delete';

       plans_actions_el.appendChild(plans_edit_el);
       plans_actions_el.appendChild(plans_delete_el);

       plans_el.appendChild(plans_actions_el);

       list_el.appendChild(plans_el);

       input.value = '';

       plans_edit_el.addEventListener('click', () => {
        if (plans_edit_el.innerText.toLowerCase() == 'edit') {
            plans_input_el.removeAttribute('readonly');
            plans_input_el.focus();
            plans_edit_el.innerText = ('Save');
        } else {
            plans_input_el.setAttribute('readonly', 'readonly');
            plans_edit_el.innerText = 'Edidt';

        }
       });

       plans_delete_el.addEventListener('click', () => {
        list_el.removeChild(plans_el);
       });
    });
});
