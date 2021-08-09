import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users',
    {
      method: 'GET', 
      headers:{
           //Add The All Headers Of Postman
           'User-Token':'add your user token',
           'Content-Type':'application/json',
           'Unique-Id':'add your unique id'

      
      },
            body: this.data
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text style={{ fontSize: 25,textAlign: 'center', paddingBottom: 10}}>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>Prakruti_2</Text>
          <Text style={{ fontSize: 14, color: 'blue', textAlign: 'center', paddingBottom: 10}}>Questions:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '.Name:- ' + item.name  + '\nEmail:-' + item.email + '\nCity:-' + item.address.city  + '\nWebSite:-' + item.website + '\n'}</Text>

            )}
          />
        </View>
      )}
    </View>
  );
};