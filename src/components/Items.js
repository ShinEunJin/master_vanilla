import Component from '../core/Component.js'

export default class Items extends Component {
    setup() {
        this.$state = { items: ['item1', 'item2'] }
    }

    template() {
        const { items } = this.$state
        return `
        <ul>
          ${items.map((item, idx) => `
          <li>
            ${item}
            <button class="deleteBtn" data-idx=${idx}>삭제</button>
          </li>
          `).join('')}
        </ul>
        <button class="addBtn">추가</button>
      `
    }

    setEvent() {
        this.$target.querySelector('.addBtn').addEventListener('click', () => {
            const { items } = this.$state
            this.setState({ items: [...items, `item${items.length + 1}`] })
        })

        this.$target.querySelectorAll('.deleteBtn').forEach(btn =>
            btn.addEventListener('click', e => {
                const items = [...this.$state.items]
                items.splice(e.target.dataset.idx, 1)
                this.setState({ items })
            }))
    }
}
