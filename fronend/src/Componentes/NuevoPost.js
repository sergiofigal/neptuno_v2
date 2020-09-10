import React, { Component } from 'react'

export default class NuevoPost extends Component {
    render() {
        return (
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" />
                    </div>
                   
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        )
    }
}
