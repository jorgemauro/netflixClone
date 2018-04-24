import React, {Component} from 'react';
import ItemsCarousel from 'react-items-carousel';
import SvgIcon from 'material-ui/SvgIcon';
class Carousel extends Component {
    state = {
        activeItemIndex: 1
    }
    changeActiveItem = (activeItemIndex) => this.setState({activeItemIndex});

    render() {
        const {title, children} = this.props;

        return (

            <div className="lolomoRow lolomoRow_title_card originals-panels-row">
                <div className="carousel-container  ">
                    {title && <div className="carousel-title">
                        {title}
                    </div>
                    }
                    <div>
                        <ItemsCarousel
                            enablePlaceholder
                            numberOfPlaceholderItems={5}
                            minimumPlaceholderTime={1000}
                            placeholderItem={<div style={{height: 250, background: '#202020'}}></div>}
                            numberOfCards={6}
                            firstAndLastGutter={true}
                            freeScrolling={false}
                            requestToChangeActive={this.changeActiveItem}
                            activeItemIndex={this.state.activeItemIndex}
                            activePosition={'center'}

                            chevronWidth={24}
                            rightChevron={<SvgIcon><path fill="#ffffff" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></SvgIcon>}
                            leftChevron={<SvgIcon><path fill="#ffffff" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></SvgIcon>}
                            outsideChevron={false}
                        >
                            {children}
                        </ItemsCarousel>
                    </div>
                </div>
            </div>
        );
    }
}

export {Carousel};