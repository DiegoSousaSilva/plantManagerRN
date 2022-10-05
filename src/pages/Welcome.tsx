import React, {useState} from 'react';
import {Image, Text, SafeAreaView, StyleSheet} from 'react-native';

import watering from '../assets/watering.png';
import Button from '../components/Button';
import colors from '../styles/colors';

const Welcome: React.FC = () => {
  const [visible, setVisible] = useState(true);

  function handleVisibility() {
    setVisible(!visible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'} suas plantas{'\n'} de forma fácil
      </Text>
      {visible && <Image source={watering} style={styles.image} />}
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title="Avançar" onPress={handleVisibility} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 20,
  },
  image: {
    width: 292,
    height: 284,
  },
});
export default Welcome;