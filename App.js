import React, { Component } from "react";
import { View } from "react-native";
import shortid from "shortid";
import { Header } from "./src/components/Header";
import { List } from "./src/components/List";
import { ErrorNotification } from "./src/components/ErrorNotification";
import * as API from "./src/services/article-api";

export default class App extends Component {
  state = {
    coctails: [],
    filters: [],
    error: null,
    isOpen: false,
    selectCategory: "Ordinary Drink",
    currentPage: 0,
    lastPage: null,
  };

  componentDidMount() {
    API.filterList()
      .then((data) =>
        this.setState({
          filters: data.data.drinks.map(
            (item) =>
              item && {
                ...item,
                id: shortid.generate(),
                checked: true,
              }
          ),
        })
      )
      .catch((error) => this.setState({ error }));
    API.coctailsList()
      .then((data) =>
        this.setState({
          coctails: data.data.drinks,
          currentPage: 1,
        })
      )
      .catch((error) => this.setState({ error }));
  }

  handleFilter = () => {
    const { filters, isOpen, currentPage } = this.state;
    const filteredCoctails = filters.filter((i) => i.checked === true);
    if (filteredCoctails.length > 0) {
      const selectCategory =
        filteredCoctails[isOpen ? 0 : currentPage].strCategory;
      API.coctailsList(selectCategory)
        .then((data) =>
          this.setState((state) => ({
            coctails: data.data.drinks,
            isOpen: isOpen ? !state.isOpen : null,
            selectCategory,
            lastPage: filteredCoctails.length,
            currentPage: isOpen ? 1 : state.currentPage + 1,
          }))
        )
        .catch((error) => this.setState({ error }));
    } else {
      this.setState((state) => ({
        selectCategory: null,
        isOpen: isOpen ? !state.isOpen : null,
        coctails: null,
      }));
    }
  };

  handleToggle = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  handleChooseCoctail = (id) => {
    this.setState((state) => ({
      filters: state.filters.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  render() {
    const {
      coctails,
      filters,
      isOpen,
      selectCategory,
      currentPage,
      lastPage,
      error,
    } = this.state;
    const disabled = currentPage === lastPage;

    return (
      <View>
        {error ? (
          <ErrorNotification text={error.message} />
        ) : (
          <View>
            <Header
              title={isOpen ? "Filters" : "Drinks"}
              onPress={this.handleToggle}
              isOpen={isOpen}
            />
            <List
              data={isOpen ? filters : coctails}
              isOpen={isOpen}
              onFilter={this.handleFilter}
              onChoose={this.handleChooseCoctail}
              categoryName={selectCategory}
              onDisabled={disabled}
            />
          </View>
        )}
      </View>
    );
  }
}
