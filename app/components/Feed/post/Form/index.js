import React from 'react';
import {
  CameraRoll,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';

class Form extends React.Component {
  state = {
    title: '',
    description: '',
    imageData: null,
  }

  getPhotoFromGallery = () => {
    ImagePicker.launchImageLibrary(null, (response)  => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        this.setState({ imageData: response });
      }
    });
  };

  updateTitle = title => this.setState({ title })
  updateDescription = description => this.setState({ description })

  onSubmit = () => {
    const { title, description, imageData } = this.state
    const { onSubmit } = this.props

    onSubmit({ title, description, imageData })
  }

  showPickedImage() {
    const { imageData } = this.state;

    if (imageData !== null) {
        return (
          <Image
          source={{ uri: imageData.uri }}
          style={{ alignSelf: 'center', width: 200, height: 200 }}
          />
        );
    } else {
      return (
        <View>
        <TouchableHighlight
        style={styles.addPhoto}
        onPress={this.getPhotoFromGallery}
        >
        <Text style={styles.addPhotoText}>Add Photo</Text>
        </TouchableHighlight>
        </View>
      );
    }
  }

  render() {
    const { actionPage, title, description, image, onSubmit } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.pageText}>{actionPage}</Text>

          {this.showPickedImage()}

          <TextInput
            placeholder='Name your art'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            value={title}
            onChangeText={this.updateTitle}
          />

          <TextInput
            placeholder='Describe your art'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            value={description}
            onChangeText={this.updateDescription}
          />

          <Button style={styles.submit}
            onPress={this.onSubmit}
          >
            {this.props.actionPage}
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
  pageText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  addPhoto: {
    alignSelf: 'center',
    backgroundColor: '#000099',
    height: 220,
    marginBottom: 20,
    width: 320,
  },
  addPhotoText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  textInput: {
    borderBottomColor: '#000099',
    borderBottomWidth: 2,
    margin: 10,
    padding: 8,
    textAlign: 'center',
  },
  submit: {
    backgroundColor: '#000099',
    borderColor: '#000099',
    borderRadius: 1,
    borderWidth: 1,
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    padding: 8,
  },
});

export default Form;
