import React, { PureComponent } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Radio, Left } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class Rules extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <CardItem style={styles.cardItemStyle}>
            <View>
              <Text
                style={{
                  fontSize: hp("3"),
                  fontWeight: "bold",
                  marginTop: hp("1"),
                  color: "#443f39"
                }}
              >
                BEFORE YOU VISIT{" "}
              </Text>

              <Text style={{ fontSize: hp("2"), color: "#8b8378" }}>
                MAKE SURE YOU KNOW THE VISITING SCHEDULE. BE THERE ON THE
                CORRECT DAY & CORRECT TIME! CALL FACILITY TO VERIFY DATE & TIME!
              </Text>
              <Text
                style={{
                  fontSize: hp("3"),
                  fontWeight: "bold",
                  marginTop: hp("1"),
                  color: "#443f39"
                }}
              >
                Who Can Visit?
              </Text>

              <Text style={{ fontSize: hp("2"), color: "#8b8378" }}>
                With little exception, anyone can visit an inmate, as long as it
                is during visiting hours, the visitor has proper identification,
                and the inmate agrees to the visit. Visitors are required to
                sign a statement indicating that they have been advised of and
                agree to abide by the rules and regulations regarding visiting.
              </Text>
              <Text
                style={{
                  fontSize: hp("3"),
                  fontWeight: "bold",
                  marginTop: hp("1"),
                  color: "#443f39"
                }}
              >
                Special Permission Visitors
              </Text>
              <Text style={{ fontSize: hp("2"), color: "#8b8378" }}>
                The following individuals can only visit with special
                permission: A person who is currently under Parole or Probation
                supervision. A Department employee. A current, active volunteer
                for the Department. A current contract employee. A person with
                pending or past criminal proceedings may be denied pending
                approval by the Superintendent. If any of these conditions
                applies to you, permission should be sought by writing to the
                Superintendent well in advance. You must do this and receive
                approval before you can visit. The Superintendent may deny
                visiting privileges to visitors with criminal histories if they
                feel that the visitor’s presence could create a threat to the
                security and good order of the facility. Criteria to be
                considered shall include, but not be limited to, the purpose of
                the proposed visit, the former institutional adjustment of the
                ex-inmate, the nature of the pending criminal proceeding, and
                the time frame between release and the proposed visit. NOTE: In
                addition to the Superintendent’s approval, Probationers and
                Parolees also need written approval from their Probation or
                Parole Officer.
              </Text>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf4e4",
    height: hp("100%")
  },
  card: {
    width: wp("93%"),
    // height: hp('25'),
    marginTop: hp("2"),
    // marginLeft: hp('2'),
    // marginRight: hp('2'),
    backgroundColor: "#ffeed0"
  },
  cardItemStyle: {
    width: wp("100%"),
    // marginLeft: hp('2'),
    marginRight: hp("2"),
    backgroundColor: "#ffeed0"
  }
});
export default Rules;
