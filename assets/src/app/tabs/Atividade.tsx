import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    // 1. Mudei a cor de fundo da tela aqui no container
    <ScrollView contentContainerStyle={estilos.tela}>
      
      {/* 1. Título com cor diferente */}
      <Text style={estilos.titulo}>Minha Atividade de React Native</Text>

      {/* 2. Três textos com tamanhos diferentes, um em negrito e outro em itálico */}
      <Text style={estilos.textoGrande}>Texto grande normal</Text>
      <Text style={estilos.textoMedio}>Texto médio em negrito</Text>
      <Text style={estilos.textoPequeno}>Texto pequeno em itálico</Text>

      {/* 3. Imagem com borda colorida e cantos arredondados até virar um círculo */}
      {/* Dica: para virar círculo perfeito, o borderRadius tem que ser metade da largura e altura */}
      <Image
        source={{ uri: 'https://reactnative.dev' }}
        style={estilos.imagemCircular}
      />

      {/* 4. Caixa representando a tela para centralizar um texto na horizontal e vertical */}
      <View style={estilos.areaCentralizada}>
        <Text style={estilos.textoCentral}>Texto no meio!</Text>
      </View>

      {/* 5. Caixa com margem, padding, borda e sombra */}
      <View style={estilos.caixaComSombra}>
        <Text>Caixa com margem, padding, borda e sombra</Text>
      </View>

      {/* 6. Três quadrados coloridos */}
      {/* Para deixar lado a lado: flexDirection: 'row' */}
      {/* Para deixar em coluna: flexDirection: 'column' */}
      {/* Abaixo está a última etapa: distribuídos nas extremidades da linha */}
      <View style={estilos.linhaQuadrados}>
        <View style={[estilos.quadrado, { backgroundColor: 'red' }]} />
        <View style={[estilos.quadrado, { backgroundColor: 'blue' }]} />
        <View style={[estilos.quadrado, { backgroundColor: 'green' }]} />
      </View>

      {/* 7. Botão com três aparências: normal, pressionado e "desabilitado" */}
      <Pressable
        style={({ pressed }) => [
          estilos.botaoNormal,
          pressed && estilos.botaoPressionado, // Quando aperta, diminui a opacidade
        ]}
      >
        <Text style={estilos.textoBotao}>Botão Normal (Segure)</Text>
      </Pressable>

      {/* Botão apenas visualmente desabilitado (cinza) */}
      <View style={estilos.botaoDesabilitado}>
        <Text style={estilos.textoBotao}>Botão Desabilitado</Text>
      </View>

      {/* 8. Semáforo: caixa escura com três círculos um embaixo do outro */}
      <View style={estilos.semaforo}>
        <View style={[estilos.luzSemaforo, { backgroundColor: 'red' }]} />
        <View style={[estilos.luzSemaforo, { backgroundColor: 'yellow' }]} />
        <View style={[estilos.luzSemaforo, { backgroundColor: 'green' }]} />
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  // 1. Fundo da tela
  tela: {
    backgroundColor: '#e6f2ff', // Azul bem clarinho
    padding: 20,
    alignItems: 'center',
  },
  // 1. Cor do texto do título
  titulo: {
    fontSize: 24,
    color: '#003366', // Azul escuro
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },

  // 2. Três tamanhos de fonte, negrito e itálico
  textoGrande: {
    fontSize: 22,
    marginBottom: 5,
  },
  textoMedio: {
    fontSize: 16,
    fontWeight: 'bold', // Negrito
    marginBottom: 5,
  },
  textoPequeno: {
    fontSize: 12,
    fontStyle: 'italic', // Itálico
    marginBottom: 20,
  },

  // 3. Imagem com borda e círculo perfeito
  imagemCircular: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: 'purple',
    // Antes do círculo, para cantos só arredondados, seria algo como borderRadius: 15
    borderRadius: 50, // Metade de 100 para formar o círculo
    marginBottom: 20,
  },

  // 4. Centralizar texto na horizontal e vertical
  areaCentralizada: {
    width: '100%',
    height: 120,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // Centraliza na vertical
    alignItems: 'center',     // Centraliza na horizontal
    marginBottom: 20,
  },
  textoCentral: {
    fontSize: 16,
    color: 'black',
  },

  // 5. Caixa com margem, padding, borda e sombra
  caixaComSombra: {
    backgroundColor: 'white',
    margin: 15,          // Margem por fora
    padding: 20,         // Espaçamento por dentro
    borderWidth: 2,      // Largura da borda
    borderColor: 'gray', // Cor da borda
    // Sombra no Android
    elevation: 5,
    // Sombra no iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
  },

  // 6. Quadrados distribuídos nas extremidades
  linhaQuadrados: {
    width: '100%',
    flexDirection: 'row',            // Deixa na horizontal (se mudar para 'column', fica em pé)
    justifyContent: 'space-between', // Joga um para cada ponta da linha
    marginBottom: 20,
  },
  quadrado: {
    width: 60,
    height: 60,
  },

  // 7. Botões (normal, pressionado e desabilitado)
  botaoNormal: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
  botaoPressionado: {
    opacity: 0.5, // Opacidade reduzida quando aperta
  },
  botaoDesabilitado: {
    backgroundColor: '#a6a6a6', // Cinza
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 25,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },

  // 8. Semáforo
  semaforo: {
    backgroundColor: '#222222', // Caixa escura
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    gap: 12, // Espaço entre as luzes
    marginBottom: 30,
  },
  luzSemaforo: {
    width: 50,
    height: 50,
    borderRadius: 25, // Círculo perfeito (metade de 50)
  },
});
