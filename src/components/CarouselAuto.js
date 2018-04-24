import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import ItemsCarousel from 'react-items-carousel';

class CarouselAuto extends Component {
    state = {
        activeItemIndex: 1
    }
    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const { children, titulo } = this.props;

        return (
            <div className="lolomoRow lolomoRow_title_card originals-panels-row">
                <h2 className="rowHeader"><a className="rowTitle originals-row-title" >
                    <div className="row-header-title">{titulo}</div>
                    <div className="aro-row-header">
                        <div className="see-all-link">Ver tudo</div>
                        <div className="aro-row-chevron icon-akiraCaretRight"></div>
                    </div>
                </a></h2>
                <div className="rowContainer rowContainer_title_card" id="row-1">
                    <div className="ptrack-container">
                        <div className="rowContent slider-hover-trigger-layer">
                            <div className="slider">
                                <div className="sliderMask showPeek">
                                    <div className="sliderContent row-with-x-columns">
                                        <ItemsCarousel  // Placeholder configurations
                                            enablePlaceholder
                                            numberOfPlaceholderItems={5}
                                            minimumPlaceholderTime={1000}
                                            placeholderItem={<div style={{ height: 250, background: '#202020' }}></div>}
                                            numberOfCards={6}
                                            gutter={12}
                                            showSlither={true}
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
                                <span className="handle handleNext active" role="button" aria-label="Ver mais títulos"><b className="indicator-icon icon-rightCaret"></b></span></div>
                        </div>
                        <span className="jawBoneContent"></span></div>
                </div>
            </div>
        );
    }
}

export { CarouselAuto };