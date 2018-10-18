import { mapGetters } from 'vuex';

export default {
    props: {
        componentIndex: {
            type: Number,
            required: true,
        },

        columnIndex: {
            type: Number,
            required: true,
        },

        canvasIndex: {
            type: Number,
            required: true,
        }
    },

    computed: {
        ...mapGetters({
            getElement: 'getElement',
        }),

        element() {
            return this.getElement(this.indexes);
        },

        elementIsSelected() {
            return this.$store.getters.elementIsSelected(this.indexes);
        },

        getElementStyles() {
            let el = this.element;

            return {
                // Size & Layout
                ...el.width && { width: el.width + '%' },
                ...el.margin && { margin: el.margin.top + 'px ' + el.margin.right + 'px ' + el.margin.bottom + 'px ' + el.margin.left + 'px' },
                ...el.padding && { padding: el.padding.top + 'px ' + el.padding.right + 'px ' + el.padding.bottom + 'px ' + el.padding.left + 'px' },
                ...el.textAlign && { textAlign: el.textAlign },

                // Appearance
                ...el.backgroundColor && { backgroundColor: 'rgba(' + el.backgroundColor.r + ', ' + el.backgroundColor.g + ', ' + el.backgroundColor.b + ', ' + el.backgroundColor.a + ')' },
                ...el.textColor && { color: 'rgba(' + el.textColor.r + ', ' + el.textColor.g + ', ' + el.textColor.b + ', ' + el.textColor.a + ')' },
                ...el.border && { borderWidth: el.border.top + 'px ' + el.border.right + 'px ' + el.border.bottom + 'px ' + el.border.left + 'px' },
                ...el.border && { borderStyle: el.border.style },
                ...el.border && { borderColor: 'rgba(' + el.border.color.r + ', ' + el.border.color.g + ', ' + el.border.color.b + ', ' + el.border.color.a + ')' },
                ...el.border && { borderRadius: el.border.radius + 'px' },
                ...el.boxShadow && { boxShadow: el.boxShadow.offsetX + 'px ' + el.boxShadow.offsetY + 'px ' + el.boxShadow.blurRadius + 'px ' + 'rgba(' + el.boxShadow.color.r + ', ' + el.boxShadow.color.g + ', ' + element.boxShadow.color.b + ', ' + element.boxShadow.color.a + ')' },

                // Typography
                ...el.fontSize && { fontSize: el.fontSize + 'pt' },
                ...el.fontFamily && { fontFamily: el.fontFamily },
                ...el.fontWeight && { fontWeight: el.fontWeight },
                ...el.lineHeight && { lineHeight: el.lineHeight },
            };
        },
    },

    data() {
        return {
            indexes: {
                canvasIndex: this.canvasIndex,
                columnIndex: this.columnIndex,
                componentIndex: this.componentIndex,
            }
        }
    },
}