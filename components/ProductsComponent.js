import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Card, CardItem, Radio, Left, Button } from "native-base";

class Products extends PureComponent {
  state = {
    productQty: 0,
    foods: this.props.foods ? this.props.foods:[]
  };
  addProductQty = () => {
    this.setState({ productQty: this.state.productQty + 1 });
  };
  subProductQty = () => {
    this.state.productQty > 0
      ? this.setState({ productQty: this.state.productQty - 1 })
      : this.setState({ productQty: 0 });
  };
  render() {
  // console.log('this is product root',this.props.food)

    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.foods.map(food => {
            return (
              <Card key = {food._id} style={styles.card}>
                <CardItem style={styles.cardItemStyle}>
                  <View style={styles.containerView}>
                    <View style={styles.imageCon}>
                      <Image
                        style={styles.productImage}
                        source={{uri:food.image}}
                      />
                    </View>
                    <View style={styles.productDetails}>
                      <View style={styles.detailsContainer}>
                        <Text style={styles.productTitle}>{food.name}</Text>
                        <Text style={styles.productTitle}>(12 Bottle)</Text>
                        <Text style={styles.productSize}>
                          {food.description}
                        </Text>
                        <View style={styles.productBtnCon}>
                          <Button
                            style={styles.nagtiveBtn}
                            onPress={this.subProductQty}
                          >
                            <Text style={styles.nagtiveBtnText}>-</Text>
                          </Button>
                          <Text style={styles.productQ}>
                            {this.state.productQty > 0
                              ? this.state.productQty
                              : 0}
                          </Text>
                          <Button
                            style={styles.plusBtn}
                            onPress={this.addProductQty}
                          >
                            <Text style={styles.plusBtnText}>+</Text>
                          </Button>
                        </View>
                      </View>

                      <View style={styles.productPriceCon}>
                            <Text style={styles.productPrice}>${food.price}</Text>
                        <Button small style={styles.productAddBtn}>
                          <Text style={styles.productAddBtnText}>Add</Text>
                        </Button>
                      </View>
                    </View>
                  </View>
                </CardItem>
              </Card>
            );
          })}
        </ScrollView>
        <View style={styles.bottomBtnCon}>
          <Button style={styles.bottomBtn} large>
            <Text style={styles.bottomBtnText}>Add More</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("MyCart")}
            success
            style={styles.bottomBtn}
            large
          >
            <Text style={styles.bottomBtnText}>View Cart</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fbf4e4",
    height: "100%"
  },
  card: {
    width: "93%",
    height: 150,
    marginTop: 20,
    marginLeft: 18,
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: "100%",
    backgroundColor: "#ffeed0"
  },
  containerView: {
    display: "flex",
    width: "100%",
    height: 125,
    flexDirection: "row"
  },
  imageCon: {
    width: "30%"
  },
  productImage: { width: "100%", height: 125 },
  productDetails: {
    display: "flex",
    flexDirection: "row",
    width: "70%"
  },
  detailsContainer: { width: "60%", height: 125 },
  productTitle: {
    fontSize: 23,
    color: "#5a564b",
    marginLeft: 10
  },
  productSize: {
    color: "#5a564b",
    marginLeft: 10
  },
  productBtnCon: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10
  },
  nagtiveBtn: {
    width: 35,
    height: 25,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row"
  },
  nagtiveBtnText: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: -3,
    color: "#5a564b"
  },
  productQ: {
    width: 40,
    height: 30,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: -2,
    marginLeft: 1,
    marginRight: 1,
    color: "#5a564b"
  },
  plusBtn: {
    width: 35,
    height: 25,
    backgroundColor: "#fff"
  },
  plusBtnText: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: -3,
    color: "#5a564b"
  },
  productPriceCon: {
    width: "40%",
    height: 125
  },
  productPrice: {
    fontSize: 30,
    textAlign: "center",
    color: "#5a564b",
    marginTop: -5,
    marginLeft: 30
  },
  productAddBtn: {
    width: "70%",
    backgroundColor: "#27378f",
    borderRadius: 5,
    height: 35,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginTop: 55
  },
  productAddBtnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#8f9283"
  },
  bottomBtnCon: { display: "flex", flexDirection: "row", width: "100%" },
  bottomBtn: {
    width: "50%",
    borderRadius: 0,
    display: "flex",
    justifyContent: "center"
  },
  bottomBtnText: { fontSize: 20, color: "#fff", fontWeight: "bold" }
});
export default Products;
