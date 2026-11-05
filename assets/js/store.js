const cartToggle = document.querySelector('.cart-toggle');
const cartPanel = document.querySelector('#cart-panel');
const cartClose = document.querySelector('.cart-close');
const cartItems = new Map();
const cartCount = document.querySelector('.cart-count');
const cartList = document.querySelector('.cart-items');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
const cartContact = document.querySelector('.cart-contact');

function renderCart() {
  let count = 0;
  let total = 0;
  cartList.replaceChildren();

  for (const [name, item] of cartItems) {
    count += item.quantity;
    total += item.price * item.quantity;

    const row = document.createElement('li');
    const label = document.createElement('span');
    const price = document.createElement('strong');
    label.textContent = `${name} × ${item.quantity}`;
    price.textContent = `${item.price * item.quantity} €`;
    row.append(label, price);
    cartList.append(row);
  }

  cartCount.textContent = String(count);
  cartEmpty.hidden = count > 0;
  cartTotal.hidden = count === 0;
  cartContact.hidden = count === 0;
  cartTotal.querySelector('strong').textContent = `${total} €`;
}

function setCartOpen(open) {
  cartPanel.hidden = !open;
  cartToggle.setAttribute('aria-expanded', String(open));
  if (open) cartClose.focus();
  else cartToggle.focus();
}

cartToggle.addEventListener('click', () => setCartOpen(cartPanel.hidden));
cartClose.addEventListener('click', () => setCartOpen(false));

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.product;
    const price = Number(button.dataset.price);
    const item = cartItems.get(name) ?? { price, quantity: 0 };
    item.quantity += 1;
    cartItems.set(name, item);
    renderCart();
    setCartOpen(true);
  });
});
