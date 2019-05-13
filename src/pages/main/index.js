import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "../../store/actions/favorites";

class Main extends Component {
    static propTypes = {
        addFavorite: PropTypes.func.isRequired,
        favorites: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                description: PropTypes.string,
                url: PropTypes.string
            })
        ).isRequired
    };

    state = {
        repositoryInput: ""
    };

    handleAddRespository = event => {
        event.preventDefault();
        this.props.addFavorite();
    };

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleAddRespository}>
                    <input
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({ repositoryInput: e.target.value })
                        }
                    />
                    <button type="submit">Adicionar</button>
                </form>

                <ul>
                    {this.props.favorites.map(favorite => (
                        <li key={favorite.id}>
                            <p>
                                <strong>{favorite.name}</strong>(
                                {favorite.description})
                            </p>
                            <a href={favorite.url}>Acessar</a>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}

const mapStateToPropos = state => ({
    favorites: state.favorites
});

const mapDispatchToPropos = dispatch =>
    bindActionCreators(FavoriteActions, dispatch);

export default connect(
    mapStateToPropos,
    mapDispatchToPropos
)(Main);
