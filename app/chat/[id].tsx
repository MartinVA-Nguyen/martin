import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ChatScreen() {
  const { id } = useLocalSearchParams();

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');

  function sendMessage() {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', text },
    ]);

    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat: {id}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.role === 'user' ? styles.userMsg : styles.botMsg,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
        />

        <Pressable onPress={sendMessage} style={styles.button}>
          <Text style={{ color: 'white' }}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 12 },
  header: { fontSize: 16, fontWeight: '600', marginBottom: 8 },

  message: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
    maxWidth: '80%',
  },
  userMsg: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
  },

  inputRow: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
});