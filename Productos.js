class Contenedor {
    constructor(nameFile) {
        this.nameFile = nameFile;
        this.productosArr = [];
    }

    async findId(id) {
        return this.productosArr.find(obj => obj.id === parseInt(id))
    };

    async findIndex(id) {
        return this.productosArr.findIndex(obj => obj.id === parseInt(id))
    }

    async filterId(id) {
        return this.productsArr.filter(obj => obj.id !== id)
    }

    async save(product) {
        try {
            let dataNew = {
                id: this.productosArr.length > 0 ? parseInt(this.productosArr.length + 1) : 1,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail
            };
            this.productosArr.push(dataNew);
            return `Producto guardado con id: ${dataNew.id}`
        } catch {
            return "No se pudo guardar el producto"
        }
    }

    async getById(id) {
        try {
            let result = await this.findId(id);
            return result === undefined ? null : result;
        } catch {
            return "Error al leer archivo";
        }
    }

    async getAll() {
        try {
            return this.productosArr;
        } catch {
            return "Error al leer arreglo";
        }
    }

    async updateById(id, product) {
        try {
            let result = await this.findIndex(id);
            if (result > -1) {
                this.productosArr[result].title = product.title;
                this.productosArr[result].price = product.price;
                this.productosArr[result].thumbnail = product.thumbnail;
            }
            return this.productosArr[result]
        } catch {
            return "No se puede editar producto seleccionado"
        }
    }

    async deleteById(id) {
        try {
            let result = await this.findIndex(id);
            if (result > -1) {
                this.productosArr.splice(result, 1);
                return `Se ha eliminado el producto ${id}`
            } else {
                return `El producto con ID ${id} no existe`
            }
            
        } catch {
            return "Error al eliminar producto"
        }
    }
}



module.exports = Contenedor;