import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">App</Link>
                    <Link to="/about">About</Link>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mollis sodales. Integer in porta quam, in commodo dolor. Praesent tempor blandit placerat. Nam vel lectus ac magna dignissim dapibus. Ut sit amet mi tempor, feugiat massa elementum, pellentesque ante. Morbi non massa eget sapien tempus porta. Aliquam consequat turpis maximus augue pretium, et imperdiet risus tincidunt. Sed commodo, velit id mattis ullamcorper, mauris lacus dictum nulla, vel porttitor nibh mauris a tellus. Curabitur dictum neque id felis viverra aliquet.
                </p>
                <p>
                    Pellentesque vel pulvinar leo, at fringilla mauris. Mauris sagittis ante pulvinar ante dignissim, vitae volutpat ex faucibus. Nulla hendrerit justo eros, a aliquam nisi bibendum non. Mauris quis metus porttitor, gravida nulla et, sagittis velit. Phasellus condimentum posuere ligula ac pulvinar. Etiam ligula sapien, euismod a risus sed, blandit laoreet sapien. Pellentesque rhoncus ultricies mi. Integer in ante est. In pretium cursus pretium. Phasellus sit amet mi sit amet dolor aliquam ultricies. Vivamus a enim justo. Suspendisse ac tellus eget lacus cursus tincidunt vitae ut purus. Fusce in turpis in nibh fringilla gravida.
                </p>
                <p>
                    Fusce sodales congue risus id fringilla. Proin mollis convallis nibh a dictum. Duis vestibulum justo vel dui porta, sed tristique nibh porta. Integer at eleifend felis, vel porttitor nibh. Proin pellentesque eleifend lacus nec varius. Aliquam ornare lacus vitae efficitur fringilla. Proin malesuada hendrerit augue quis euismod. Donec arcu libero, maximus nec sapien at, lobortis ultricies mi.
                </p>
                <p>
                    Donec in enim venenatis, facilisis dui ac, lobortis mauris. Etiam aliquam sit amet enim ac pretium. Quisque tincidunt malesuada nisi. Vestibulum vitae felis id dolor pharetra bibendum a quis ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi at felis enim. Proin rhoncus rhoncus velit, sed malesuada odio mattis eu. Ut libero ante, condimentum eget ullamcorper eget, volutpat nec dui. Duis id ultricies velit, at pharetra mi. Quisque et ipsum nec nibh rhoncus imperdiet. Sed ac nulla malesuada, sagittis orci et, condimentum augue.
                </p>
                <p>
                    Morbi mi elit, auctor id vestibulum non, tempus in urna. Phasellus quis dignissim erat. Suspendisse lorem velit, blandit quis ante vitae, ornare feugiat felis. Mauris cursus, lorem quis sollicitudin ornare, ipsum leo consequat elit, nec hendrerit neque massa vitae eros. Maecenas pretium pretium dapibus. Aliquam id orci nisi. Pellentesque porta ex nec metus euismod bibendum.
                </p>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(App);